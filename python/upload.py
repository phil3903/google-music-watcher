from gmusicapi import Musicmanager, clients
import json
import sys

oauth_path = clients.OAUTH_FILEPATH

mm = Musicmanager()
is_logged_in = mm.login(oauth_path)

# Get file paths from node
file_names = []
for line in sys.stdin:
    file_names = json.loads(line)

# Perform upload
if is_logged_in:
    upload_result = mm.upload(file_names, '320k', True)
    print json.dumps(upload_result)


