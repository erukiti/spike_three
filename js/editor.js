var EditorModel = Backbone.Model.extend({
  defaults: function() {
    return {
      title: "",
      content: ""
    };
  }
});

var editor = new EditorModel();

var ContentView = Backbone.View.extend({
  el: '#content',
  events: {
    'keyup': 'editing'
  },
  editing: function() {
    this.model.set('content', this.el.value);
  }
})

var contentView = new ContentView({model: editor});

var PreviewView = Backbone.View.extend({
  el: '#preview',
  initialize: function() {
    this.model.on('change:content', this.updateMarkup, this);
  },
  updateMarkup: function() {
    this.el.innerHTML = marked(this.model.get('content'));
  }
});

var previewView = new PreviewView({model: editor});

