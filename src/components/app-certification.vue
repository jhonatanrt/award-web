<template>
  <div class="certificate-container">
    <div class="certificate">
      <div class="water-mark-overlay"></div>
      <div class="certificate-header"></div>
      <div class="certificate-body">
        <p class="certificate-title">
          <strong
            >AWARD app</strong
          >
        </p>
        <h1>Certificado de premiación</h1>
        <p class="student-name">{{detail.fullName}} </p>
        <div class="certificate-content">
          <div class="about-certificate">
            <p>
              Se completó exitosamente durante el mes de <strong>{{data.month}}</strong>
            </p>
          </div>
          <p class="topic-title">
            Se le otorga el premio de <strong>"{{data.categoryName}}"</strong> 
          </p>
          <div class="text-center">
            <p class="topic-description text-muted">
              - {{data.comentary}} -
            </p>
          </div>
        </div>
        <div class="certificate-footer text-muted">
          <div class="row">
            <div class="col-md-6">
              <p>______________________</p>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-6">
                  <p>Acreditado por</p>
                </div>
                <div class="col-md-6">
                  <p>{{data.user.name}}</p>
                </div>
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
  name: "AppCertification",
  props: {
    data: Object,
    detail: Object,
  },
  components: {},
  data() {
    return { message: "" };
  },
  mounted() {

  },
};
</script>

<style scoped lang="scss">
body {
  font-family: Roboto;
}

.certificate-container {
  padding: 50px;
  width: 1024px;
}
.certificate {
  border: 20px solid #0c5280;
  padding: 25px;
  height: 600px;
  position: relative;
}

.certificate:after {
  content: "";
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  position: absolute;
  background-size: 100%;
  z-index: -1;
}

.certificate-header {
  width: 80px;
  height: 80px;
}

.certificate-title {
  text-align: center;
}

.certificate-body {
  text-align: center;
}

h1 {
  font-weight: 400;
  font-size: 48px;
  color: #0c5280;
}

.student-name {
  font-size: 24px;
}

.certificate-content {
  margin: 0 auto;
  width: 750px;
}

.about-certificate {
  width: 380px;
  margin: 0 auto;
}

.topic-description {
  margin-bottom: 60px;
  text-align: center;
}
</style>