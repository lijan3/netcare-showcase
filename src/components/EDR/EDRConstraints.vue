<template>
  <div>
    <ol>
      <li>Data - SAP + SAP endpoints are the primary source of information</li>
      <li>
        Stack
        <ol>
          <li>
            DotNetNuke: SPA module
            <ul>
              <li>DotNetNuke&apos;s module to implement SPA</li>
              <li>ReactJS was the choice of SPA</li>
            </ul>
          </li>
          <li>React Hooks (front-end)</li>
          <li>
            DotNetNuke WebAPI
            <ul>
              <li>DNN extension used to implement API endpoints</li>
            </ul>
          </li>
          <li>MS SQL Server</li>
          <li>Azure DevOps</li>
        </ol>
      </li>
      <li>
        Deployment
        <ol>
          <li>Automated artifact generated from build on main</li>
          <li>Takes approximately 7 minutes</li>
          <li>Install the module into the application</li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "EDRConstraints",
};
</script>

<style></style>
