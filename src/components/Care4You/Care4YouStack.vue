<template>
  <div>
    <p class="card-text">
      Very strict constraints in terms of stack: required to build MVC modules
      because this was the Netcare standard for all teams.
    </p>
    <ol>
      <li>
        DotNetNuke: MVC Module
        <ul>
          <li>DotNetNuke&apos;s own implementation of MVC</li>
          <li>A lot of quality of life MVC features were not implemented</li>
          <li>
            No async/await functionality as such had to build a lot of
            background processes to handle data ingestion
          </li>
        </ul>
      </li>
      <li>
        Razor/jQuery
        <ul>
          <li>Not fully featured due to limited DNN MVC implementation</li>
        </ul>
      </li>
      <li>
        SQL Server 2012
        <ul>
          <li>
            Limited functionality which complicated a lot of data queries we
            were asked to implement
          </li>
        </ul>
      </li>
      <li>Windows Services</li>
      <li>RabbitMQ</li>
      <li>Azure DevOps</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Care4YouStack",
};
</script>

<style></style>
