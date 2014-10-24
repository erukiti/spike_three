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
    previewView.trigger("editing", this.el.value);
  }
})

var contentView = new ContentView({model: editor});

var PreviewView = Backbone.View.extend({
  el: '#preview',
  initialize: function() {
    this.on("editing", function(e) {
      this.el.innerHTML = marked(e)
    })
  }
});

var previewView = new PreviewView();

