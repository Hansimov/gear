(function() {

    var board = JXG.JSXGraph.initBoard('box2', {
        boundingbox: [-5, 5, 5, -5],
        keepaspectratio: true,
        axis: false,
        showNavigation: false,
        showCopyright: false
    });
    var p = [],
        l = [],
        i = [],
        c = [],
        j = [],
        k;

    p[0] = board.create('point', [-2.5, -3], { name: 'A', strokeColor: '#7355ff', fillColor: '#7355ff' });
    p[1] = board.create('point', [-0, 4], { name: 'B', strokeColor: '#7355ff', fillColor: '#7355ff' });
    p[2] = board.create('point', [2.5, -3], { name: 'C', strokeColor: '#7355ff', fillColor: '#7355ff' });
    p[3] = board.create('point', [-4, 0], { name: 'D', strokeColor: '#7355ff', fillColor: '#7355ff' });
    p[4] = board.create('point', [4, 0], { name: 'E', strokeColor: '#7355ff', fillColor: '#7355ff' });

    for (k = 0; k < 5; k++) {
        l[k] = board.create('segment', [p[k], p[(k + 1) % 5]], { strokeColor: 'black', strokeWidth: 1 });
    }

    for (k = 0; k < 5; k++) {
        i[k] = board.create('intersection', [l[k], l[(k + 2) % 5], 0], { name: '', strokeColor: '#EAEA00', fillColor: '#EAEA00' });
    }

    for (k = 0; k < 5; k++) {
        c[k] = board.create('circumcircle', [p[k], i[k], i[(k + 2) % 5]], { strokeColor: 'gray', strokeWidth: 1, point: { visible: false } });
    }
    for (k = 0; k < 5; k++) {
        j[k] = board.create('intersection', [c[k], c[(k + 2) % 5], 0], { name: '', strokeColor: '#EA0000', fillColor: '#EA0000' });
    }

    cc = board.create('circumcircle', [j[0], j[2], j[3]], { strokeColor: 'red', strokeWidth: 2, point: { strokeColor: '#000000', fillColor: '#000000', size: 1 } });
    board.update();
})();