// trace('modifying kineticjs pixel ratio to hard-code to 1');
_ref = ["HitCanvas", "SceneCanvas", "Canvas"];
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
  className = _ref[_i];
  Kinetic[className].prototype.init = (function(p_method) {
    return function(p_config) {
      if (p_config == null) {
        p_config = {};
      }
      p_config.pixelRatio = 1;
      return p_method.call(this, p_config);
    };
  })(Kinetic[className].prototype.init);
}