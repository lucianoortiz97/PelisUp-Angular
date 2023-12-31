<div class="d-flex justify-content-center flex-wrap mb-6">
  <div class="cards col-md-3 col-12" *ngFor="let item of data">
    <div class="star d-flex justify-content-center align-items-center">
      <i class="far fa-star me-1"></i>{{ item.vote_average.toFixed(1) }}
    </div>
    <img
      class="portada"
      src="https://image.tmdb.org/t/p/w500/{{ item.poster_path }}"
      alt="portada"
    />
    <p class="title-card link-regular">
      {{ item.name || item.title }}
    </p>
  </div>
</div>