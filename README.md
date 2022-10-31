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

**Store image in localStorage using ID.**

This method does not store the image data, but only the input "value" (**ID**). As this also depends on the quality and resolution of the image which maybe 1MB to 2MB in size and maybe more than this, it is not possible to store many images on **localStorage**. 

But, if we only store the **ID** in **localStorage**, the size used in **localStorage** is less and does not exceed the limit (5MB of **localStorage**). You can store as much as you like.

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

<h1 align="center">User Avatar</h1>

## Preview

<details>
<summary><strong>Screenshot</strong></summary>

_Responsive device_

<br>

**Desktop**
<div align="center"><img src="https://ik.imagekit.io/zazerconer/App/save-image-in-localstorage/avatar-desktop_dZIshlDhZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667149015529" alt="zz-avatar-desktop" width="500px"></div>

**Tablet**
<div align="center"><img src="https://ik.imagekit.io/zazerconer/App/save-image-in-localstorage/avatar-tablet_wTtV3hP0c.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667149022128" alt="zz-avatar-tablet" width="320px" height="479px"></div>

**Mobile**
<div align="center"><img src="https://ik.imagekit.io/zazerconer/App/save-image-in-localstorage/avatar-mobile_lEwhwSCZE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667149018698" alt="zz-avatar-mobile" width="280px" height="485px"></div>

</details>

<br>

## Source Code

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
&nbsp;
<a href="">
<img width="55px" height="30px" src="https://img.shields.io/badge/Image-blueviolet"></a>
</div>

<br>
<hr>

<h1 align="center">Background Cover</h1>

## Preview

<details>
<summary><strong>Screenshot</strong></summary>

_Responsive device_

<br>

**Desktop**
<div align="center"><img src="https://ik.imagekit.io/zazerconer/App/save-image-in-localstorage/background-desktop_zXUJ4jmJ-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667149020397" alt="zz-background-desktop" width="500px"></div>

**Tablet**
<div align="center"><img src="https://ik.imagekit.io/zazerconer/App/save-image-in-localstorage/background-tablet_pV3G_HvZ6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667149026444" alt="zz-background-tablet" width="320px" height="479px"></div>

**Mobile**
<div align="center"><img src="https://ik.imagekit.io/zazerconer/App/save-image-in-localstorage/background-mobile_R1-6yH-PB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667149024010" alt="zz-background-mobile" width="280px" height="485px"></div>

</details>

<br>

## Source Code

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
&nbsp;
<a href="">
<img width="55px" height="30px" src="https://img.shields.io/badge/Image-blueviolet"></a>
</div>

<br>
<hr>

<h1 align="center">Next Page</h1>

## Preview

<details>
<summary><strong>Screenshot</strong></summary>

_Responsive device_

<br>

**Desktop**
<div align="center"><img src="https://ik.imagekit.io/zazerconer/App/save-image-in-localstorage/page-desktop_F4Rq9RCnM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667149014690" alt="zz-page-desktop" width="500px"></div>

**Tablet**
<div align="center"><img src="https://ik.imagekit.io/zazerconer/App/save-image-in-localstorage/page-tablet_PZTOYSW9R.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667149015536" alt="zz-page-tablet" width="320px" height="479px"></div>

**Mobile**
<div align="center"><img src="https://ik.imagekit.io/zazerconer/App/save-image-in-localstorage/page-mobile_AOGBimQuj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667149015456" alt="zz-page-mobile" width="280px" height="485px"></div>

</details>

<br>

## Source Code

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

<br>
<hr>
<br>

**Note :** If you have your own collection of Avatar images that you have designed yourself, you can use this method as your future project which may come in handy later.

<br>
<hr>

## License : [MIT](https://github.com/ZazerConer/Store-Image-in-localStorage/blob/main/LICENSE)

<br><br><br><br><br>

<div align="center"><strong>© 2022 ZazerConer's | Store Image in localStorage</strong></div>





