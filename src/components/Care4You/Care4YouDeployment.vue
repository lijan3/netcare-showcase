<template>
  <div>
    <p class="card-text">TODO</p>
    <ol>
      <li>
        Modules required manually uploading a zip file to a web frontend and
        waiting 30+ minutes for the website to recompile
      </li>
      <li>
        Deploying Windows services required RDP into different nodes and
        manually copying files over
      </li>
      <li>
        All Netcare developers use the same DEV and QA environments so had to
        take turns deploying
      </li>
      <li>
        DNN is a highly coupled platform so mistakes from other teams could
        break our modules
      </li>
      <li>
        Did not have system permissions to stop and start Windows services on
        prod so always had to have another Netcare dev present
      </li>
      <li>Could only deploy to prod after hours</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Care4YouDeployment",
};
</script>

<style></style>
