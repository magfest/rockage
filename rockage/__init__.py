from uber.common import *

config = parse_config(__file__)
django.conf.settings.TEMPLATE_DIRS.insert(0, join(config['module_root'], 'templates'))

class AnalyticsStatic:
    def index(self, session):
        pass

rockage_app_config = {
    '/': {
        'tools.staticdir.on': True,
        'tools.staticdir.dir': os.path.join(config['module_root'], 'static')
    }
}

cherrypy.tree.mount(AnalyticsStatic(), PATH + '/rstatic', rockage_app_config)