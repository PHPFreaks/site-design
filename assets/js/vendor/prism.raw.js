Prism.hooks.add('after-highlight', function(env) {
    var clickHandler = function(env)
    {
        var newWindow = window.open('', 'Raw Code', 'chrome,resizable,scrollbars,centerscreen,width=800,height=600');
            newWindow.document.open();
            newWindow.document.write('<pre><code>' + env.code + '</code></pre>');
            newWindow.document.close();
    };
    var toolbar = document.createElement('div');
        toolbar.setAttribute('class', 'toolbar');
        toolbar.innerHTML = 'View source';
        if(toolbar.addEventListener)
        {
            toolbar.addEventListener('click', function(){clickHandler(env)});    
        }
        else if(toolbar.attachEvent)
        {
            // < IE9
            toolbar.attachEvent('onclick',  function(){clickHandler(env)});
        }
    env.element.parentNode.insertBefore(toolbar, env.element);
});