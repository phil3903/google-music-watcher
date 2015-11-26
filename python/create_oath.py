from gmusicapi import Musicmanager

# oauth login
mm = Musicmanager()
oath_path = mm.perform_oauth('./oauth.cred')