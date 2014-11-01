var EditorPreviewView = Backbone.View.extend({
  el: '#preview',
  initialize: function() {
    this.model.on('change:content', this.updateMarkup, this);
  },
  updateMarkup: function() {
    this.el.innerHTML = marked(this.model.get('content'));
  }
});
