#!/usr/bin/env python3
"""
Generate word cloud data from the user-provided research_words.md file.
"""

import json
import re
from collections import Counter
from pathlib import Path

# Common words to exclude (stop words + generic/uninformative terms)
STOP_WORDS = {
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been',
    'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
    'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those',
    'we', 'us', 'our', 'show', 'find', 'study', 'using', 'used', 'use',
    'also', 'however', 'thus', 'therefore', 'such', 'which', 'where', 'when',
    'how', 'why', 'what', 'who', 'their', 'them', 'they', 'it', 'its', 'here',
    'there', 'between', 'through', 'into', 'over', 'under', 'above', 'below',
    'both', 'each', 'few', 'more', 'most', 'other', 'some', 'than', 'then',
    'very', 'so', 'just', 'any', 'all', 'not', 'no', 'nor', 'only', 'same',
    'too', 'well', 'work', 'present', 'provide', 'results', 'result',
    'paper', 'article', 'abstract', 'arxiv', 'cornell', 'university',
    'focus', 'illustrate', 'demonstrate', 'discuss', 'argue', 'reveal',
    # Generic/uninformative research terms
    'space', 'spatial', 'spatially', 'body', 'behavior', 'local', 'state',
    'strong', 'further', 'tcps', 'given', 'case', 'cases', 'based', 'within',
    'across', 'along', 'away', 'near', 'around', 'against', 'upon', 'without',
    'whether', 'while', 'during', 'before', 'after', 'since', 'until',
    'becomes', 'become', 'becoming', 'make', 'makes', 'making', 'made',
    'take', 'takes', 'taking', 'taken', 'give', 'gives', 'giving', 'given',
    'allow', 'allows', 'allowing', 'allowed', 'enable', 'enables', 'enabling',
    'obtain', 'obtains', 'obtaining', 'obtained', 'perform', 'performs',
    'performing', 'performed', 'describe', 'describes', 'describing', 'described',
    'consider', 'considers', 'considering', 'considered', 'propose', 'proposes',
    'proposing', 'proposed', 'compute', 'computes', 'computing', 'computed',
    'calculate', 'calculates', 'calculating', 'calculated', 'measure', 'measures',
    'measuring', 'measured', 'observe', 'observes', 'observing', 'observed',
    'apply', 'applies', 'applying', 'applied', 'develop', 'develops', 'developing',
    'developed', 'introduce', 'introduces', 'introducing', 'introduced',
    'examine', 'examines', 'examining', 'examined', 'investigate', 'investigates',
    'investigating', 'investigated', 'explore', 'explores', 'exploring', 'explored',
    'analyze', 'analyzes', 'analyzing', 'analyzed', 'evaluate', 'evaluates',
    'evaluating', 'evaluated', 'determine', 'determines', 'determining', 'determined',
    'identify', 'identifies', 'identifying', 'identified', 'characterize',
    'characterizes', 'characterizing', 'characterized', 'establish', 'establishes',
    'establishing', 'established', 'reveal', 'reveals', 'revealing', 'revealed',
    'extract', 'extracts', 'extracting', 'extracted', 'derive', 'derives',
    'deriving', 'derived', 'formulate', 'formulates', 'formulating', 'formulated',
    'construct', 'constructs', 'constructing', 'constructed', 'build', 'builds',
    'building', 'built', 'create', 'creates', 'creating', 'created',
    'generate', 'generates', 'generating', 'generated', 'form', 'forms',
    'forming', 'formed', 'yield', 'yields', 'yielding', 'yielded',
    'lead', 'leads', 'leading', 'led', 'result', 'results', 'resulting', 'resulted',
    'arise', 'arises', 'arising', 'arose', 'occur', 'occurs', 'occurring', 'occurred',
    'appear', 'appears', 'appearing', 'appeared', 'emerge', 'emerges', 'emerging',
    'emerged', 'exist', 'exists', 'existing', 'existed', 'remain', 'remains',
    'remaining', 'remained', 'continue', 'continues', 'continuing', 'continued',
    'provide', 'provides', 'providing', 'provided', 'offer', 'offers', 'offering',
    'offered', 'present', 'presents', 'presenting', 'presented', 'exhibit',
    'exhibits', 'exhibiting', 'exhibited', 'display', 'displays', 'displaying',
    'displayed', 'manifest', 'manifests', 'manifesting', 'manifested',
    'indicate', 'indicates', 'indicating', 'indicated', 'suggest', 'suggests',
    'suggesting', 'suggested', 'imply', 'implies', 'implying', 'implied',
    'confirm', 'confirms', 'confirming', 'confirmed', 'verify', 'verifies',
    'verifying', 'verified', 'validate', 'validates', 'validating', 'validated',
    'support', 'supports', 'supporting', 'supported', 'demonstrate', 'demonstrates',
    'demonstrating', 'demonstrated', 'prove', 'proves', 'proving', 'proved',
    'shown', 'found', 'seen', 'known', 'understood', 'realized', 'recognized',
    'noted', 'reported', 'mentioned', 'stated', 'described', 'discussed',
    'explained', 'clarified', 'illustrated', 'highlighted', 'emphasized',
    'stressed', 'underlined', 'pointed', 'addressed', 'treated', 'handled',
    'dealt', 'managed', 'controlled', 'regulated', 'governed', 'directed',
    'guided', 'influenced', 'affected', 'impacted', 'modified', 'altered',
    'changed', 'varied', 'shifted', 'moved', 'transferred', 'transported',
    'carried', 'conveyed', 'transmitted', 'propagated', 'spread', 'distributed',
    'allocated', 'assigned', 'attributed', 'associated', 'related', 'connected',
    'linked', 'coupled', 'joined', 'combined', 'merged', 'integrated', 'unified',
    'consolidated', 'aggregated', 'accumulated', 'collected', 'gathered',
    'assembled', 'organized', 'arranged', 'structured', 'configured', 'designed',
    'planned', 'prepared', 'ready', 'set', 'placed', 'positioned', 'located',
    'situated', 'found', 'discovered', 'detected', 'identified', 'recognized',
    'distinguished', 'differentiated', 'separated', 'divided', 'split', 'broken',
    'fractured', 'cracked', 'damaged', 'destroyed', 'eliminated', 'removed',
    'deleted', 'erased', 'cleared', 'cleaned', 'purged', 'flushed', 'drained',
    'emptied', 'depleted', 'exhausted', 'consumed', 'spent', 'wasted', 'lost'
}

# Word consolidation rules (merge similar terms)
WORD_CONSOLIDATION = {
    'superconducting': ['superconductor', 'superconductors', 'superconductivity'],
    'vortex': ['vortices'],
    'quantum': ['qubit', 'qubits'],
    'topological': ['topology'],
    'circuit': ['circuits'],
    'lattice': ['lattices'],
    'interaction': ['interactions', 'interacting'],
    'state': ['states'],
    'phase': ['phases'],
    'system': ['systems'],
    'model': ['models', 'modeling'],
    'disorder': ['disordered'],
    'localization': ['localized', 'delocalized'],
    'driven': ['drive', 'drives', 'driving'],
    'symmetry': ['symmetric', 'symmetries'],
    'condensate': ['condensation', 'condensates'],
    'entanglement': ['entangled'],
    'spectrum': ['spectral', 'spectra'],
    'field': ['fields'],
    'energy': ['energies'],
    'mode': ['modes'],
    'boundary': ['boundaries'],
}


def load_text_file(file_path):
    """Load text from markdown file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        return f.read()


def tokenize_and_count(text):
    """Tokenize text and count word frequencies."""
    # Convert to lowercase and extract words
    words = re.findall(r'\b[a-z]+\b', text.lower())
    
    # Filter out stop words and short words
    words = [w for w in words if w not in STOP_WORDS and len(w) > 3]
    
    return Counter(words)


def consolidate_words(word_counts):
    """Consolidate similar words based on consolidation rules."""
    consolidated = Counter()
    
    # Create reverse mapping for quick lookup
    reverse_map = {}
    for primary, variants in WORD_CONSOLIDATION.items():
        reverse_map[primary] = primary
        for variant in variants:
            reverse_map[variant] = primary
    
    # Consolidate counts
    for word, count in word_counts.items():
        primary_word = reverse_map.get(word, word)
        consolidated[primary_word] += count
    
    return consolidated


def generate_word_cloud_data(word_counts, top_n=50):
    """Generate word cloud JSON data from word counts."""
    # Get top N words
    top_words = word_counts.most_common(top_n)
    
    # Format for word cloud
    word_cloud_data = [
        {
            "text": word.capitalize(),
            "value": count
        }
        for word, count in top_words
    ]
    
    return word_cloud_data


def main():
    # File paths
    script_dir = Path(__file__).parent
    input_file = script_dir.parent / 'my_files' / 'research_words.md'
    output_file = script_dir.parent / 'data' / 'word_cloud.json'
    
    print(f"Loading text from {input_file}...")
    text = load_text_file(input_file)
    print(f"Loaded {len(text)} characters")
    
    print("Counting word frequencies...")
    word_counts = tokenize_and_count(text)
    print(f"Found {len(word_counts)} unique words")
    
    print("Consolidating similar terms...")
    consolidated_counts = consolidate_words(word_counts)
    print(f"Consolidated to {len(consolidated_counts)} unique terms")
    
    print("Generating word cloud data (top 50 words)...")
    word_cloud_data = generate_word_cloud_data(consolidated_counts, top_n=50)
    
    print(f"\nTop 10 words:")
    for item in word_cloud_data[:10]:
        print(f"  {item['text']}: {item['value']}")
    
    print(f"\nWriting to {output_file}...")
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(word_cloud_data, f, indent=2, ensure_ascii=False)
    
    print("✓ Word cloud data generated successfully from research_words.md!")


if __name__ == '__main__':
    main()
