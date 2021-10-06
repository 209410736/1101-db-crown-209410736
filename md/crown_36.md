#First One
![](https://i.imgur.com/t6aIr2c.png)

**index.ejs**

```html
<body>
  <h1><%= title %></h1>
  <p>Welcome to <%= title %></p>
  <h3>My name is <%= name %></h3>
  <h3>My student id is <%= id %></h3>
</body>
```

**index.js**

```js
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    name: 'Xiwei SUN',
    id: '209410736',
  });
});
```

#Two
![](https://i.imgur.com/akejxzt.jpg)

#Three
![](https://i.imgur.com/xbYVi2u.png)
![](https://i.imgur.com/srXYqNk.png)
