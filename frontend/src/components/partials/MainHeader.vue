<template>
    <header class="header">
      <div class="container">
        <div class="logo">
  
          <h1>My Movie</h1>
        </div>
        <nav class="nav">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/movies">Movies</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/video/create">Create</router-link></li>
          </ul>
        </nav>
        <div class="search-bar">
          <!-- Thanh tìm kiếm mới -->
          <input
            type="text"
            placeholder="Tìm kiếm phim..."
            v-model="searchQuery"
          />
          <button style="margin-bottom: 19px;" @click="searchAnime">Tìm kiếm</button>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  
  </script>
  
  <style scoped>
  .header {
    background-color: #333;
    color: #fff;
    padding: 1rem 0;
    border-radius: 5px;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  
  .nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
  .nav ul li {
    margin-left: 20px;
  }
  
  .nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  .nav ul li a:hover {
    color: #ff9800;
  }
  
  .search-bar {
    display: flex;
    align-items: center;
  }
  
  .search-bar input[type="text"] {
    padding: 0.5rem;
    border-radius: 4px;
    border: none;
    outline: none;
    width: 200px;
  }
  
  .search-bar button {
    background-color: #ff9800;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    margin-left: 10px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .search-bar button:hover {
    background-color: #e68900;
  }
  
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .nav ul {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .nav ul li {
      margin: 10px 0;
    }
  
    .search-bar {
      margin-top: 10px;
    }
  }
  </style>
  