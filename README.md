# i18n-translator

<h3>Usage</h3>

Initialize i18n translator with <code>i18n.init(i18nMap);</code> where <code>i18nMap</code> is a map in the form
```javascript
{
  "Original text": "Translated text",
  "Original text abc": "Translated text abc"
}
```

Then you can call <code>i18.tr("Original text")</code> to obtain the string <code>"Translated text"</code>
