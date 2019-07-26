Vue.component('pagination', 
{
  mounted: function() {
    this.page = this.currPage;
    if(this.page == 1) {
      this.canGetMoreLeft = false;
    }
  },
  props: [
    'currPage',
    'totalPages',
    'path'
  ],
  data: function() {
    return {
      page: 0,
      canGetMoreLeft: true,
      canGetMoreRight: true
    }
  },
  methods: {
    goPrev() {
      this.page = this.currPage; 
      --this.page;

      if(this.page == 1) {
        this.canGetMoreLeft = false;
      } else {
        this.canGetMoreLeft = true;
        this.canGetMoreRight = true;
      }
      if(this.page > 0 ) {
        this.$router.push({
          path: this.path,
          query: {
            page: this.page
          }
        })
      }
    },
    goNext(){
      this.page = this.currPage; 
      ++this.page;

      if(this.page == this.totalPages) {
        this.canGetMoreRight = false;
      } else {
        this.canGetMoreRight = true;
        this.canGetMoreLeft = true;
      }
      if(this.page < this.totalPages + 1 ) {
        this.$router.push({
          path: this.path,
          query: {
            page: this.page
          }
        })
      }
    },
    goPage() {
      if(this.page > 0 && this.page < this.totalPages + 1) {
        this.$router.push({
          path: this.path,
          query: {
            page: this.page
          }
        })
      } else {
        // Do something *(with your life)
      }
    } 
    },
    template:
    `
      <nav>
        <ul class="pagination container justify-content-center mt-2">
          <li class="page-item" @click="goPrev" v-if="canGetMoreLeft">
            <button class="page-link">Previous</button>
          </li>

          <form class="form-inline col-md-2 justify-content-center">
              <input type="text" class="form-control form-control-sm col-md-5" v-model="page" @keyup.enter="goPage"/> 
              <span class="form-text h6">/</span>
              <input type="text" class="form-control form-control-sm col-md-5" v-model="totalPages" disabled />
          </form>
        
          <li class="page-item" @click="goNext" v-if="canGetMoreRight">
            <button class="page-link">Next</button>
          </li>
        </ul>
      </nav>
    `
})