import requests
import json
import os
import urllib.parse
import re
from collections import Counter

AUTHOR_NAME = "Ian Mondragon-Shem"

# Comprehensive list of stop words including generic scientific terms
STOP_WORDS = {
    # Common English stop words
    'the', 'and', 'of', 'to', 'in', 'a', 'is', 'that', 'for', 'on', 'with', 'as', 'by', 'are', 'at', 'this', 'from',
    'an', 'be', 'which', 'or', 'we', 'it', 'can', 'has', 'have', 'not', 'but', 'their', 'its', 'also', 'these',
    'into', 'than', 'more', 'one', 'two', 'using', 'used', 'such', 'between', 'when', 'where', 'while', 'after',
    'before', 'during', 'through', 'over', 'under', 'above', 'below', 'up', 'down', 'out', 'off', 'all', 'any',
    'some', 'no', 'nor', 'only', 'own', 'same', 'so', 'then', 'there', 'very', 'will', 'would', 'could', 'should',
    'may', 'might', 'must', 'about', 'against', 'among', 'around', 'because', 'been', 'being', 'both', 'does',
    'doing', 'done', 'each', 'else', 'even', 'ever', 'every', 'few', 'had', 'having', 'he', 'her', 'here', 'hers',
    'him', 'his', 'how', 'if', 'just', 'like', 'me', 'most', 'my', 'myself', 'now', 'our', 'ours', 'ourselves',
    'she', 'since', 'still', 'those', 'too', 'until', 'us', 'was', 'were', 'what', 'who', 'whom', 'why', 'you',
    'your', 'yours', 'yourself', 'yourselves', 'them', 'themselves', 'other', 'another', 'whether', 'without',
    # Generic scientific/academic terms
    'show', 'results', 'study', 'paper', 'present', 'demonstrate', 'investigate', 'analyze', 'discuss', 'based', 
    'via', 'due', 'well', 'new', 'system', 'systems', 'phase', 'phases', 'work', 'find', 'provide', 'exhibit',
    'illustrate', 'characterize', 'measurements', 'measurement', 'method', 'methods', 'approach', 'technique',
    'techniques', 'experimental', 'theoretical', 'numerical', 'analytical', 'computational', 'framework',
    'analysis', 'result', 'conclusion', 'conclusions', 'introduction', 'background', 'summary', 'review',
    'overview', 'description', 'details', 'example', 'examples', 'case', 'cases', 'particular', 'general',
    'specific', 'different', 'various', 'several', 'many', 'number', 'large', 'small', 'high', 'low',
    # Generic physics/math terms that don't specify QISE
    'model', 'models', 'theory', 'theories', 'equation', 'equations', 'function', 'functions', 'parameter',
    'parameters', 'value', 'values', 'range', 'limit', 'limits', 'order', 'first', 'second', 'third',
    'dimensional', 'dimensions', 'space', 'time', 'spatial', 'temporal', 'behavior', 'properties', 'property',
    'effect', 'effects', 'regime', 'regimes', 'condition', 'conditions', 'given', 'obtained', 'observed',
    'expected', 'predicted', 'calculated', 'measured', 'determined', 'estimated', 'approximation', 'exact',
    'simple', 'complex', 'strong', 'weak', 'linear', 'nonlinear', 'single', 'multiple', 'individual',
    'collective', 'total', 'average', 'typical', 'characteristic', 'corresponding', 'respectively',
    'independent', 'dependent', 'relation', 'relationship', 'dependence', 'comparison', 'compared',
    'similar', 'difference', 'differences', 'change', 'changes', 'variation', 'variations', 'increase',
    'decrease', 'growth', 'decay', 'evolution', 'development', 'formation', 'structure', 'structures',
    'configuration', 'configurations', 'arrangement', 'distribution', 'pattern', 'patterns',
    # Generic qualifiers
    'important', 'significant', 'interesting', 'relevant', 'possible', 'potential', 'main', 'key',
    'essential', 'fundamental', 'basic', 'primary', 'secondary', 'additional', 'further', 'recent',
    'previous', 'earlier', 'later', 'current', 'present', 'future', 'known', 'unknown', 'clear',
    'unclear', 'certain', 'uncertain', 'direct', 'indirect', 'positive', 'negative', 'good', 'better',
    'best', 'optimal', 'suitable', 'appropriate', 'necessary', 'sufficient', 'required', 'desired',
    # Generic verbs
    'make', 'makes', 'making', 'made', 'take', 'takes', 'taking', 'taken', 'give', 'gives', 'giving',
    'given', 'become', 'becomes', 'becoming', 'allow', 'allows', 'allowing', 'allowed', 'lead', 'leads',
    'leading', 'led', 'cause', 'causes', 'causing', 'caused', 'perform', 'performed', 'performing',
    'consider', 'considered', 'considering', 'obtain', 'obtained', 'obtaining', 'achieve', 'achieved',
    'achieving', 'reach', 'reached', 'reaching', 'apply', 'applied', 'applying', 'use', 'uses',
    # Additional generic terms
    'thus', 'therefore', 'however', 'moreover', 'furthermore', 'nevertheless', 'although', 'though',
    'whereas', 'whilst', 'meanwhile', 'indeed', 'fact', 'facts', 'note', 'noted', 'see', 'seen',
    'shown', 'found', 'reported', 'described', 'discussed', 'mentioned', 'stated', 'suggested',
    'proposed', 'assumed', 'supposed', 'believed', 'thought', 'considered', 'regarded', 'treated',
    'defined', 'expressed', 'represented', 'denoted', 'indicated', 'specified', 'identified',
    'recognized', 'acknowledged', 'realized', 'understood', 'known', 'established', 'confirmed',
    'verified', 'validated', 'tested', 'examined', 'explored', 'studied', 'investigated', 'analyzed',
    'evaluated', 'assessed', 'reviewed', 'surveyed', 'summarized', 'outlined', 'presented', 'reported',
    'published', 'written', 'developed', 'derived', 'formulated', 'constructed', 'built', 'designed',
    'created', 'generated', 'produced', 'fabricated', 'prepared', 'synthesized', 'grown', 'deposited',
}

def reconstruct_abstract(inverted_index):
    if not inverted_index:
        return None
    
    # Create a list of (position, word) tuples
    word_positions = []
    for word, positions in inverted_index.items():
        for pos in positions:
            word_positions.append((pos, word))
    
    # Sort by position
    word_positions.sort()
    
    # Join words to form the abstract
    return " ".join([word for _, word in word_positions])

def get_word_frequencies(text_list):
    all_text = " ".join(text_list).lower()
    # Remove punctuation and split
    words = re.findall(r'\b[a-z]{3,}\b', all_text)
    
    # Filter stop words
    filtered_words = [w for w in words if w not in STOP_WORDS]
    
    # Count frequencies
    counter = Counter(filtered_words)
    
    # Format for d3-cloud (text, value)
    # Take top 100 words
    return [{"text": word, "value": count} for word, count in counter.most_common(100)]

def fetch_publications():
    print(f"Fetching publications for {AUTHOR_NAME} from OpenAlex...")
    
    try:
        # 1. Search for the author to get their ID
        print("Searching for author ID...")
        author_search_url = f"https://api.openalex.org/authors?search={urllib.parse.quote(AUTHOR_NAME)}"
        response = requests.get(author_search_url)
        response.raise_for_status()
        author_data = response.json()
        
        if not author_data['results']:
            print("Author not found.")
            return

        # Get the first result (most likely match)
        author_id = author_data['results'][0]['id']
        display_name = author_data['results'][0]['display_name']
        print(f"Found author: {display_name} ({author_id})")
        
        # 2. Fetch works using the Author ID
        works_url = f"https://api.openalex.org/works?filter=author.id:{author_id}&sort=publication_date:desc&per-page=100"
        response = requests.get(works_url)
        response.raise_for_status()
        data = response.json()
        
        works = data.get('results', [])
        print(f"Found {len(works)} publications.")
        
        formatted_pubs = []
        all_abstracts = []
        
        for work in works:
            # Extract relevant data
            title = work.get('title', 'Untitled')
            
            # Format authors
            authors = []
            for authorship in work.get('authorships', []):
                authors.append(authorship.get('author', {}).get('display_name', 'Unknown'))
            
            # Journal/Venue
            venue = work.get('primary_location', {}) or {}
            source = venue.get('source', {}) or {}
            journal = source.get('display_name') if source else "Preprint/Unknown"
            
            # Date
            date = work.get('publication_date', '')
            year = work.get('publication_year', '')
            
            # Links
            doi = work.get('doi')
            pdf_url = work.get('open_access', {}).get('oa_url')
            
            # Abstract
            abstract = reconstruct_abstract(work.get('abstract_inverted_index'))
            if abstract:
                all_abstracts.append(abstract)
            
            pub_entry = {
                "id": work.get('id'),
                "title": title,
                "authors": authors,
                "journal": journal,
                "year": year,
                "date": date,
                "doi": doi,
                "pdf": pdf_url,
                "summary": abstract, # Use abstract as summary for now
                "image": None # Placeholder, would need manual update or another source
            }
            
            formatted_pubs.append(pub_entry)
            
        # Save Publications to JSON
        data_dir = os.path.join(os.path.dirname(__file__), '../data')
        os.makedirs(data_dir, exist_ok=True)
        
        pubs_output_path = os.path.join(data_dir, 'publications.json')
        with open(pubs_output_path, 'w') as f:
            json.dump(formatted_pubs, f, indent=2)
        print(f"Successfully saved {len(formatted_pubs)} publications to {pubs_output_path}")
        
        # Generate and Save Word Cloud Data
        if all_abstracts:
            word_cloud_data = get_word_frequencies(all_abstracts)
            word_cloud_path = os.path.join(data_dir, 'word_cloud.json')
            with open(word_cloud_path, 'w') as f:
                json.dump(word_cloud_data, f, indent=2)
            print(f"Successfully saved word cloud data to {word_cloud_path}")
        else:
            print("No abstracts found to generate word cloud.")
        
    except Exception as e:
        print(f"Error fetching publications: {e}")

if __name__ == "__main__":
    fetch_publications()
