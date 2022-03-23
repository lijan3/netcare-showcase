<template>
  <p class="card-text">
    The Setup Wizard is ready to start Care4You and begin the last part of
    Setup.
  </p>
  <p class="card-text">
    Remove any disks from their drives, and then click Finish to finish Setup.
  </p>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck1" />
      <label class="form-check-label" for="gridCheck1">
        Create Desktop shortcut
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Care4YouFinish",
};
</script>

<style>
input[type="checkbox"] {
  visibility: hidden;
}

.form-check .form-check-label {
  line-height: 20px;
}

.form-check-label::before,
.form-check-label::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
}
.form-check-label {
  margin-left: 6px;
}
.form-check-label::before {
  height: 16px;
  width: 16px;
  border: 2px inset #d5d5d5;
  background: white;
  box-shadow: -1px -1px 0 0 #828282;
}
input[type="checkbox"] + .form-check-label::after {
  display: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23000' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  width: 12px;
  height: 12px;
  margin: 4px;
}
input:checked + .form-check-label::after {
  display: block;
}
</style>
