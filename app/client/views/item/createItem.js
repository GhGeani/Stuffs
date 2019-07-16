const createItem = Vue.component('create-item', {

  template: `
    <form class="container col-7 card border">
      <div class="display-4 text-muted text-center">Create a new item</div>
      <hr>

      <div class = 'form-group'
      <label for="creator">Creator</label>
      <input type="text" class="form-control" id = "creator" name = "creator" placeholder="Type name..">

      <label for="title">Title</label>
      <input type="text" class="form-control" id = "title" name = "title" placeholder="Type title.. ">

      <label for="subjects">Few words about</label>
      <textarea class="form-control" id="subjects" name="subjects" rows="3"></textarea>
      </div>

    </form>
  `
})