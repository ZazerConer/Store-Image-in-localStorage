<h1 align="center">Store Image in localStorage</h1>

<br>

## Method of use

- **LocalStorage**

Store any data, such as IDs, text, image data, passwords etc.

**See this tools [Show Data From localStorage](https://github.com/ZazerConer/Show-Data-From-localStorage)**

<br>

**But, how to store images in localStorage?**

If you search out there, there are actually many ways to store images in **localStorage**. But this way is different from others. **_Save our own images and not from user images_**.

Storing images on **localStorage** is faster and easier to use than other methods. In fact it can also be used without an internet connection (offline use).

**The trick is :**

1. Must have own image. 

2. Do not use images from URL links. 

3. Images must be saved in the same folder. 

- **Folder**
     - index.html 
     - script.js 
     - style.css 
- **image**
     - image1.jpg 
     - image2.jpg 
     - image3.jpg
     - image4.jpg

Examples of use : 

`<img src="image/image1.jpg">`

<br>

**Save the image using ID.**

This method does not save the image data, but only with the input "**value**" (**ID**). So, the size usage on **localStorage** does not exceed the limit (5MB from **localStorage**). You can use as many as you like.

Example : 

`<input type="id" id="image1" value="img1">` 

Its **_value_** is `img1` <-- "**ID**"

<br>

### Store the ID on localStorage

**_Use the Form to store the ID from the input "value"._**

`store()`

```html
<!--HTML-->

<form method="get" onsubmit="return store(this);">
  <input type="id" id="image1" value="img1">
  <input type="submit" value="Save">
</form>
```

`setItem()`

```javascript
// JavaScript.

function store(imageID) {
  var id = imageID["image1"];
  localStorage.setItem("img1", id.value); // Value "img1".
  return true;
}
```

### Get and display images from ID

`src=""`

```html
<!--HMTL-->

<!-- Display the image -->
<img id="showImg" src="">
```

`getItem()`

```javascript
// JavaScript.

const img1 = localStorage.getItem('img1');
  if (img1) { // ID img1.
  document.getElementById("showImg").src = "image/image1.jpg";
}
```

<br><br>

<div align="center">
<a href="">
<img width="80px" height="35px" src="https://img.shields.io/badge/DEMO-slateblue"></a>
</div>

<br><br>

For the full source code you can see and click the button below.

<hr>

## User Avatar

### Preview

<img src="">

### Source Code

<br>

<div align="center">
<a href="">
<img width="55px" height="30px" src="https://img.shields.io/badge/HTML-orangered"></a>
&nbsp;
<a href="">
<img width="55px" height="30px" src="https://img.shields.io/badge/CSS-dodgerblue"></a>
&nbsp;
<a href="">
<img width="78px" height="30px" src="https://img.shields.io/badge/JavaScript-gold"></a>
</div>

<hr>

## Background Cover

### Preview

<img src="">

### Source Code

<br>

<div align="center">
<a href="">
<img width="55px" height="30px" src="https://img.shields.io/badge/HTML-orangered"></a>
&nbsp;
<a href="">
<img width="55px" height="30px" src="https://img.shields.io/badge/CSS-dodgerblue"></a>
&nbsp;
<a href="">
<img width="78px" height="30px" src="https://img.shields.io/badge/JavaScript-gold"></a>
</div>

<hr>

## Next Page

### Preview

<img src="">

### Source Code

<br>

<div align="center">
<a href="">
<img width="55px" height="30px" src="https://img.shields.io/badge/HTML-orangered"></a>
&nbsp;
<a href="">
<img width="55px" height="30px" src="https://img.shields.io/badge/CSS-dodgerblue"></a>
&nbsp;
<a href="">
<img width="78px" height="30px" src="https://img.shields.io/badge/JavaScript-gold"></a>
</div>

<hr>
<br>

**Note :** If you have your own collection of Avatar images that you have designed yourself, you can use this method as your future project which may come in handy later.

<br>
<hr>

### License : [MIT](https://github.com/ZazerConer/Store-Image-in-localStorage/blob/main/LICENSE)

<br><br><br><br><br>

<div align="center"><strong>© 2022 ZazerConer's | Store Image in localStorage</strong></div>





