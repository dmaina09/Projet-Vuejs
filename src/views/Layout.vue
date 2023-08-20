<template>
    <div class=" public"> 
     
        <Header />
        <router-view />
        <Footer />
    
    </div> 
  
  </template>
  
  <script>
  import Header from '@/components/Header';
  import Footer from '@/components/Footer'
  export default{
      name: ' PublicLayout',
      components:{
          Header,
          Footer
      }
  }
  </script>
  
  