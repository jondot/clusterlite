# Clusterlite
A silly, rediculously lite implementation of clustering for node web
apps (or others).

## Why?
I happily thought to use leanboost/cluster, then I found out it doesn't
work with the new Node 0.6.x cluster API.

## Usage

    # clusterlite func. number of workers = number of cpus
    clusterlite ()->
      < your app code >

    # you might want to force a number of workers
    clusterlite.workers = 4
    clusterlite ()->
      ...


## Contributing

Fork, implement, add tests, pull request, get my everlasting thanks and a respectable place here :).


## Copyright

Copyright (c) 2011 [Dotan Nahum](http://gplus.to/dotan) [@jondot](http://twitter.com/jondot). See MIT-LICENSE for further details.
