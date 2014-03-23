import urllib
import urllib2

url = "http://localhost:3000/search/users/Chris"
req = urllib2.Request(url)
response = urllib2.urlopen(req)
page = response.read()
print page
