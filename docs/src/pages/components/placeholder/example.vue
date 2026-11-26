<template>
  <div class="d-flex justify-content-around">
    <div class="card" style="width: 18rem">
      <img src="https://picsum.photos/id/110/400/300" class="card-img-top" alt="picsum image" />

      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    <div class="card" aria-hidden="true" style="width: 18rem">
      <img src="https://picsum.photos/id/110/400/300?grayscale" class="card-img-top" alt="placeholder image" />
      <div class="card-body">
        <h5 class="card-title placeholder-glow">
          <span class="placeholder col-6"></span>
        </h5>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-7"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-6"></span>
          <span class="placeholder col-8"></span>
        </p>
        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
      </div>
    </div>
  </div>
</template>
