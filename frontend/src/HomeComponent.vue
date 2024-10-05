<template>
    <div>
      <div class="allcontain">
      <div class="container text-center my-5">
        <h1 class="display-4">Watch Anime Online</h1>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4" v-for="video in videos" :key="video.slug">
            <div class="card h-100 shadow-sm" >
              <router-link :to="`/home/${video.slug}`">
                <img
                  :src="video.img_url"
                  class="card-img-top img-fluid"
                  :alt="video.title"
                  style="height: 200px; object-fit: cover;"
                />
              </router-link>
              <div class="card-body d-flex flex-column">
                <router-link :to="`/home/${video.slug}`" class="text-dark">
                  <h5 class="card-title">{{ video.title }}</h5>
                </router-link>
                <p class="card-text text-muted mb-4">{{ video.description }}</p>
                <router-link :to="`/home/${video.slug}`" class="btn btn-primary mt-auto">
                  Watch Anime
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
  </template>
  
  <script>
  export default {
    data() {
      return {
        videos: [] 
      };
    },
    created() {

      fetch('/home')  
        .then(response => response.json())
        .then(data => {
          console.log('Data from API:', data); 
          this.videos = data.videos;
        })
        .catch(error => {
          console.error('Error fetching videos:', error);
        });
    }
  };
  </script>
  
  <style scoped>
  .row{
    justify-content: space-around;
  }
  .allcontain{
    background-color: #343a40;
    width: 70%;
    margin-left: 15%;
    border-radius: 10px;
    padding-bottom: 30px;
  }
  .container {
    max-width: 1200px;
  }
  
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 30px;
    color: #ffffff;
  }
  
  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: none;
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  .card-title {
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  .card-text {
    font-size: 0.9rem;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #004085;
  }
  
  .card-img-top {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  .card-body {
    padding: 1.25rem;
  }
  
  .shadow-sm {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }
  </style>
  