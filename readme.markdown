# an internet commons

how to build services that nobody can own

https://github.com:substack/jsconf-uy-2015

---
# mi

nombre: James Halliday
website: http://substack.net

hobbyist programmer

https://github.com/substack/omega-projects/issues

---
# digital property

* naming (dns, npm)
* transaction ledger (bitcoin)
* anonymous cryptographic trust (ssl cartels)

These all have an element of scarcity
and competition.

---
# more on property

"The only demand that property recognizes, is its own gluttonous
appetite for greater wealth, because wealth means power; the
power to subdue, to crush, to exploit, the power to enslave, to
outrage, to degrade."

-- Emma Goldman

---
# star trek

"It's a miracle these people ever got out of the 20th century."

-- Captain James T. Kirk in San Francisco, 1986 (Star Trek IV)

---
# services

If nobody owns a service:

* nobody can turn it off
* nobody can charge rent
* nobody exclusively bears the cost

* everybody can participate according to their ability

---
# power asymmetry

```
     [client]      [client]  _[client]
              \       /     /
                [   server   ]
              /      |     \
       [client]   [client] [client]
```

---
# power asymmetry

```
     [client]      [client]  _[client]
              \       /     /
                [   server   ] <-- too much power here
              /      |     \
       [client]   [client] [client]
```

Whoever controls the server controls how clients communicate and
transact.

---
# cycles of dependence

```
The only people who call
the people who use their products users
are drug dealers and web developers.

-- Alex Sexton, yesterday
```

---
# methods of control

Servers decide:

* who gets access
* what code clients will get when they load a page
* what users can do with their own data

---
# distributed service advantages

Peer to peer systems have some other technical advantages:

* offline transactions
* inverse scaling!
* don't need to trust computers with your secrets

---
# inverse scaling

The more people download a file from bittorrent,
the easier it is for everyone to download that file.

---
# inverse scaling

Infrastructure costs are only for low traffic, not peak!

---
# inverse scaling challenges

Make sure that files with low popularity are still available.

Servers have a role here.

---
# the web

New features that will make our p2p cyber-utopia possible:

* webrtc
* window.crypto.getRandomValues()
* localstorage / indexeddb
* appcache / service workers

---
# "frontend"

The more powerful browsers get,
the more web development will 
be about building distributed systems.

---
# so you've decided to build a distributed system

```
    __       _________________________________
   /  \     [ It looks like you're building a ]
 -+-  -+-   [ distributed system.             ]
 (O)  (O)   [  _______________________________]
  |    |     |/
  | |  | / --'
  | \__||
  |     |
   \___/
                 
```

---
# How do do these things without servers?

* authentication
* storage
* communication

---
# authentication

Generate an asymmetric keypair.

Sign messages with your key to prove you wrote them.

---
## centralized naming

Publish to a global namespace with increasing scarcity

-- or --

Pay rent to a registrar to artificially restrict scarcity

---
## decentralized naming

Your name is what your friends call you.

Your name is the hash of your public key.

---
## decentralized authentication on the server: generate

```
# generate a unique keypair
$ ssh-keygen
```

---
## decentralized authentication on the server: your name

```
# your name
$ shasum < ~/.ssh/id_rsa.pub
a71a6fc6d7e09ae98b6e5dc2a3d02770aa323cfb  -
```

---
## decentralized authentication on the server: auth

```
# use your public key to authenticate from now on:
ssh substack.net 'cat>>.ssh/authorized_keys' <~/.ssh/id_rsa.pub
```

---
## decentralized authentication on the web

``` js
require('elliptic')

// -- or --

require('eccjs')
```

---
## decentralized authentication on the web: demo

demo: let's sign a message

---
# storage

* indexes
* blob storage

---
## content addressable data

```
key = hash(value)
```

---
## cryptographically secure log

first message:

a.key = '494480a4157c2a2019aae4090de67ade7481362f'
a.value = '\nhello\n'

second message:

b.key = 'cf08eb0f8f5b783492def8d1545b03f80786f742'
b.value = '494480a4157c2a2019aae4090de67ade7481362f\nwow\n'

third message:

c.key = '7a4accea4c7a0c99be1fcae0249da999d6814e5d'
c.value = 'cf08eb0f8f5b783492def8d1545b03f80786f742\nthird msg\n'

---
## abstract-blob-store

A common interface for bulk storage:

* .createWriteStream()
* .createReadStream()
* .exists()
* .remove()

https://github.com/maxogden/abstract-blob-store

---
## content-addressable-blob-store

demo!

---
## idb-content-addressable-blob-store

browser demo!

---
## replication is easy

* trivially concatenate logs
* build indexes on top of the logs

---
## replication is easy

* trivially concatenate logs
* build indexes on top of the logs

Discard the idea that a key maps to a single value.

---
## demo

forkdb

---
## torrent-blob-store

An abstract blob store backed to bittorrent

https://github.com/mafintosh/torrent-blob-store

---
# connections

Peers connect to each other with webrtc.

bittorrent in the browser:

http://webtorrent.io

---
## bittorrent seeking

```
FILE:hash
  [chunk1:hash1]
  [chunk2:hash2]
  [chunk3:hash3]
  [chunk4:hash4]
  [chunk5:hash5]
```

---
## bittorrent-backed distributed maps

demo: mddf

---
## bittorrent feeds

BEP 44 - repurpose the DHT address tables to store arbitrary data

http://bittorrent.org/beps/bep_0044.html

---
## torrent feeds

demo: torrent-feed

---
# attack vectors of the web

Cryptography is unsafe in the browser
so long as the server can send arbitrary payloads.

How can you prevent future you from turning evil?

---
# solution: brick your website

cache.manifest:

```
CACHE MANIFEST
/
/cache.manifest
NETWORK:
*
```

or load html from the bittorrent dht

---

http://hyperboot.org

https://keyboot.org

---
# links

* https://github.com/substack/omega-projects/issues
* http://github.com/ssbc - decentralized data feeds
* https://github.com/maxogden/abstract-blob-store
* http://webtorrent.io/
* https://github.com/mafintosh/torrent-stream
* https://github.com/substack/omega-projects/issues
* http://hyperboot.org/
* https://keyboot.org/

---
# __END__

HACK THE PLANET
