# Demo

---

html代码一

```html
<script type="text/html" data-in="head"></script>
```
运行结果：
<script type="text/html" data-in="head"></script>

html代码二

```html
<script type="text/html" data-in="inhead"></script>
```
运行结果：
<script type="text/html" data-in="inhead"></script>

html代码三

```html
<script type="text/html" data-in="inhead3"></script>
```
运行结果：
<script type="text/html" data-in="inhead3"></script>

## Normal usage

````javascript
seajs.use('index', function(include) {
	include();
});
````
