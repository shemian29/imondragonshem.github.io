import requests
import json
import os
import urllib.parse

AUTHOR_NAME = "Ian Mondragon-Shem"

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
            
            pub_entry = {
                "id": work.get('id'),
                "title": title,
                "authors": authors,
                "journal": journal,
                "year": year,
                "date": date,
                "doi": doi,
                "pdf": pdf_url
            }
            
            formatted_pubs.append(pub_entry)
            
        # Save to JSON
        output_path = os.path.join(os.path.dirname(__file__), '../data/publications.json')
        with open(output_path, 'w') as f:
            json.dump(formatted_pubs, f, indent=2)
            
        print(f"Successfully saved {len(formatted_pubs)} publications to {output_path}")
        
    except Exception as e:
        print(f"Error fetching publications: {e}")

if __name__ == "__main__":
    fetch_publications()
