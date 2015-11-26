from gmusicapi import Musicmanager, clients
import os.path

oauth_path = clients.OAUTH_FILEPATH

if os.path.isfile(oauth_path):
    print 'OAuth credentials already exist'
else:
    # oauth login
    mm = Musicmanager()
    oath_path = mm.perform_oauth(oauth_path, True)

