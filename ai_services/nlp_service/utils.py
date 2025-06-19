def normalize_text(text):
    """Normalize the input text by converting to lowercase and stripping whitespace."""
    return text.lower().strip()

def validate_input(text):
    """Validate the input text to ensure it meets certain criteria."""
    if not text or not isinstance(text, str):
        raise ValueError("Input must be a non-empty string.")
    return True

def split_sentences(text):
    """Split the input text into sentences."""
    return text.split('.')

def extract_keywords(text):
    """Extract keywords from the input text."""
    # This is a placeholder for a more complex keyword extraction logic
    return list(set(text.split()))