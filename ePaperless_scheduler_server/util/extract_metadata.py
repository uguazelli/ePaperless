import os
import shutil

async def parse_filename(file_path):
    filename = os.path.basename(file_path)
    sin = None
    tags = []
    metadata = {}
    new_filename = None

    if filename.startswith('@@'):
        # Split the filename into components
        components = filename[2:].split('~')

        for component in components:
            if component.startswith('SIN='):
                sin = component[4:]
            elif component.startswith('TAGS='):
                tags = component[5:].split(',')
            elif component.startswith('METADATA='):
                metadata_pairs = component[9:].split(',')
                for pair in metadata_pairs:
                    key, value = pair.split('=')
                    metadata[key] = value
            elif component.startswith('FILENAME='):
                new_filename = component[9:]

        # Rename the file to its original filename
        directory = os.path.dirname(file_path)
        new_file_path = os.path.join(directory, new_filename)

        shutil.move(file_path, new_file_path)
        return sin, tags, metadata, new_file_path, new_filename

    else:
        return sin, tags, metadata, file_path, filename