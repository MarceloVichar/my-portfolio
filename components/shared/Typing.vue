<template>
  <p>
    <span>{{ currentText }}</span>
    <span class="blinking-cursor">|</span>
  </p>
</template>

<script>
export default {
  name: 'Typing',
  props: {
    text: {
      type: String,
      required: true,
    },

  },
  data() {
    return {
      currentText: '', // Texto atual sendo exibido
      isDeleting: false, // Indica se está apagando
      typingSpeed: 150, // Velocidade de digitação (ms)
      deletingSpeed: 100, // Velocidade de apagamento (ms)
      pauseBetween: 1500, // Pausa antes de apagar (ms)
    }
  },
  mounted() {
    this.typeEffect() // Inicia o efeito ao montar o componente
  },
  methods: {
    typeEffect() {
      if (!this.isDeleting) {
        // Adiciona caracteres
        this.currentText = this.text.substring(0, this.currentText.length + 1)
        if (this.currentText === this.text) {
          setTimeout(() => (this.isDeleting = true), this.pauseBetween)
        }
      }
      else {
        // Remove caracteres
        this.currentText = this.text.substring(0, this.currentText.length - 1)
        if (this.currentText === '') {
          this.isDeleting = false
        }
      }

      // Define a velocidade do loop
      const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed
      setTimeout(this.typeEffect, speed)
    },
  },
}
</script>

<style>
.blinking-cursor {
  display: inline-block;
  width: 0;
  background-color: currentColor;
  animation: blink 0.8s infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  50.1%, 100% {
    opacity: 0;
  }
}
</style>
