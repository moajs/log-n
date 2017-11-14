# log-n


## Install

```
npm i -S log-n
```

## Usages

default level = 10

```
require('log-n')({
    a:2,
    b:{
        c:3
    }
})
```

with level params

```
require('log-n')({
    a:2,
    b:{
        c:3
    }
}, 1000)
```