const filterComp = Vue.component('filter-comp', {
  props: [],

  template: `
    <div class="row">
      <div class="card">
        <div class="card-header text-center text-muted">Filters</div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">
              <span>Name</span>
              <input type="text" class="form-control form-control-sm" />
            </li>
          </ul>
        </div>
        <button class="btn btn-sm btn-block btn-search">
          Search
        </button>
      </div>
    </div>
  `
})