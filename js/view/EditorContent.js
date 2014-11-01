var EditorContentView = Backbone.View.extend({
  el: '#content',
  events: {
    'keyup': 'editing'
  },
  editing: function() {
    this.model.set('content', this.el.value);
  }
})
