<template>
  <div class="bg-white">
    <div 
      class="
        flex 
        justify-between 
        items-center 
        px-28 py-3
        sticky
        top-0
        z-50
      "
      :class="{'bg-soft-purple bg-opacity-10': view.atTopOfPage, 'bg-white shadow-md': !view.atTopOfPage}" 
    >
      <div class="flex text-left logo">
        <div class="mr-3">
          <img src="../assets/logo/invoiceinaja.svg" alt="InvoiceinAja">
        </div>
        <div>
          <span class="font-bold text-xl text-black cursor-pointer">InvoiceinAja</span>
        </div>
      </div>
        
      <div>
          <a
            class="
              px-4 py-3 
              font-semibold 
              rounded 
              no-underline 
              text-slate-900
              cursor-pointer 
              hover:bg-soft-purple
              hover:text-white"
            >
              Features
          </a>
          
          <a
            class="
              px-4 py-3 
              font-semibold 
              rounded 
              no-underline 
              text-slate-900
              cursor-pointer 
              hover:bg-soft-purple
              hover:text-white"
            >
              Costumer
          </a>

          <a
            class="
              px-4 py-3 
              font-semibold 
              rounded 
              no-underline 
              text-slate-900
              cursor-pointer 
              hover:bg-soft-purple
              hover:text-white"
            >
              Blog
          </a>
      </div>

      <div class="flex">
        <div class="mr-6">
          <button 
            v-ripple
            class="flex justify-center items-center w-32 h-12 button button-outline-primary"
            @click="redirectTo('/login')"
          >
          <span class="text-base">Login</span>
          </button>
        </div> 
        <div>
          <button 
            v-ripple
            class="flex justify-center items-center w-32 h-12 button button-primary"
            @click="redirectTo('/register')"
          >
            <span class="text-base">Sign Up</span>
          </button>
        </div>       
      </div>
    </div>

    <!-- Content -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      view: {
        atTopOfPage: true
      }
    };
  },
  methods: {
    redirectTo(path) {
      this.$router.push(path)
    },
    handleScroll(){
        // when the user scrolls, check the pageYOffset
        if(window.pageYOffset > 0){
            // user is scrolled
            if(this.view.atTopOfPage) this.view.atTopOfPage = false
        }else{
            // user is at top of page
            if(!this.view.atTopOfPage) this.view.atTopOfPage = true
        }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>
</style>