if (document.createElement('svg').getAttributeNS) {

    var checkbxsCircle = Array.prototype.slice.call(document.querySelectorAll('.svg-draw-circle input[type="checkbox"]'));
    var radioCircle = Array.prototype.slice.call(document.querySelectorAll('.svg-draw-circle input[type="checkbox"]'))

    pathDefs = {
            cross: ['M 10 10 L 90 90', 'M 90 10 L 10 90'],
            circle: ['M34.745,7.183C25.078,12.703,13.516,26.359,8.797,37.13 c-13.652,31.134,9.219,54.785,34.77,55.99c15.826,0.742,31.804-2.607,42.207-17.52c6.641-9.52,12.918-27.789,7.396-39.713 C85.873,20.155,69.828-5.347,41.802,13.379']
        },
        animDefs = {
            cross: { speed: .2, easing: 'ease-in-out' },
            circle: { speed: .2, easing: 'ease-in-out' },
        };

    function createSVGEl(def) {
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        if (def) {
            svg.setAttributeNS(null, 'viewBox', def.viewBox);
            svg.setAttributeNS(null, 'preserveAspectRatio', def.preserveAspectRatio);
        } else {
            svg.setAttributeNS(null, 'viewBox', '0 0 100 100');
        }
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        return svg;
    }

    function controlCheckbox(el, type, svgDef) {
        var svg = createSVGEl(svgDef);
        el.parentNode.appendChild(svg);

        el.addEventListener('change', function() {
            if (el.checked) {
                draw(el, type);
            } else {
                reset(el);
            }
        });
    }

    function controlRadiobox(el, type) {
        var svg = createSVGEl();
        el.parentNode.appendChild(svg);
        el.addEventListener('change', function() {
            resetRadio(el);
            draw(el, type);
        });
    }

    checkbxsCircle.forEach(function(el, i) { controlCheckbox(el, 'circle'); });
    radioCircle.forEach(function(el, i) { controlRadiobox(el, 'circle'); });

    function draw(el, type) {
        var paths = [],
            pathDef,
            animDef,
            svg = el.parentNode.querySelector('svg');

        switch (type) {
            case 'cross':
                pathDef = pathDefs.cross;
                animDef = animDefs.cross;
                break;
            case 'circle':
                pathDef = pathDefs.circle;
                animDef = animDefs.circle;
                break;
        };

        paths.push(document.createElementNS('http://www.w3.org/2000/svg', 'path'));

        if (type === 'cross' || type === 'list') {
            paths.push(document.createElementNS('http://www.w3.org/2000/svg', 'path'));
        }

        for (var i = 0, len = paths.length; i < len; ++i) {
            var path = paths[i];
            svg.appendChild(path);

            path.setAttributeNS(null, 'd', pathDef[i]);

            var length = path.getTotalLength();
            path.style.strokeDasharray = length + ' ' + length;
            if (i === 0) {
                path.style.strokeDashoffset = Math.floor(length) - 1;
            } else path.style.strokeDashoffset = length;
            path.getBoundingClientRect();
            path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'stroke-dashoffset ' + animDef.speed + 's ' + animDef.easing + ' ' + i * animDef.speed + 's';
            path.style.strokeDashoffset = '0';
        }
    }

    function reset(el) {
        Array.prototype.slice.call(el.parentNode.querySelectorAll('svg > path')).forEach(function(el) { el.parentNode.removeChild(el); });
    }

    function resetRadio(el) {
        Array.prototype.slice.call(document.querySelectorAll('input[type="radio"][name="' + el.getAttribute('name') + '"]')).forEach(function(el) {
            var path = el.parentNode.querySelector('svg > path');
            if (path) {
                path.parentNode.removeChild(path);
            }
        });
    }

}