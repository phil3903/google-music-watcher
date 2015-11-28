from gmusicapi import Musicmanager, clients
from node_translator import Translator
import sys, json

translator = Translator()

# Get file paths from node
file_names = translator.get_input()

# Returns path to system stored oauth
oauth_path = clients.OAUTH_FILEPATH

# Init Musicmanager and login
mm = Musicmanager()
is_logged_in = mm.login(oauth_path)

if is_logged_in:
    # Matching set to false due to lack of ffmpeg or avconv
    upload_result = mm.upload(file_names, '320k', False)
    print json.dumps(upload_result)
    # return upload_result

    if upload_result[0] != {}:
        print('Something happened here!')
else:
    sys.exit('Not logged in')









