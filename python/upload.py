from gmusicapi import Musicmanager

# oauth login
mm = Musicmanager()
is_logged_in  = mm.login('./oauth.cred')

if is_logged_in:
    upload_result = mm.upload('file', '320k', True)
    print upload_result


