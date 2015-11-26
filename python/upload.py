from gmusicapi import Musicmanager, clients
import os.path

oauth_path = clients.OAUTH_FILEPATH

# oauth login
mm = Musicmanager()
is_logged_in = mm.login(oauth_path)

if is_logged_in:
    upload_result = mm.upload('file', '320k', True)
    print upload_result


