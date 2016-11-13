from facepy import GraphAPI

# Initialize the Graph API with a valid access token (optional,
# but will allow you to do all sorts of fun stuff).
graph = GraphAPI('EAACEdEose0cBAAGnMlZAgxqq7OMfDzCM7VD6OFnr3vkv1KXpiCOAaYxD9ZBywjwuVJ6z9tZCukN4zga0EpSfOCkc8NeZCHoCp1VbdTWL8lemv8Ks0kPu1SeQkwahdxNZAv4q3FsKiAPfPtU0ZCfTDXPrTrx5TpK2hTXFdJ5wrr4wZDZD')

# Get my latest posts
resp = graph.get('me/friends')

print resp
# Post a photo of a parrot
#graph.post(
#    path = 'me/photos',
#    source = open('parrot.jpg', 'rb')
#)
