<template>
  <div class="root-header">
    <div style="width: 50%; display: flex; align-items: center; height: 100%; padding-left: 10px; padding-right: 10px;">
        <input style="width: 100%; height: 50px; border: solid 1px #BBB; border-radius: 50px; padding-left: 50px; font-size: 16px;" placeholder="Encontre uma área do sistema..."  type="text">
        <img src="../assets/procurar.png" width="25px"  style="position: absolute; margin-left: 15px;" alt="">
    </div>
    <div style="width: 50%; display: flex; align-items: center; justify-content: end; padding-right: 10px;">
        <div>
            <button class="buttons-options" >
                <i class="material-icons icone">
                    notifications
                </i>
            </button>
        </div>
        <div style="cursor: pointer; display: flex; align-items: center;">
            <div>
                <button class="buttons-options" >
                    <i class="material-icons icone">
                        arrow_drop_down
                    </i>
                </button>
            </div>
            <div>
                <img src="../assets/eu.png" width="50px" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeaderTop',
  components: {
    
  }
}
</script>

<style scoped>
    .root-header{
        height: 80px;
        display: flex;
    }

    .buttons-options{
        background-color: transparent;
        border: none;
        transition: 0.5s;
        transform: translateY(0px);
        cursor: pointer;
    }

    .buttons-options:hover{
        color: #42B883;
        transition: 0.5s;
        transform: translateY(-5px);
    }

    .icone{
        font-size: 27px;
    }
</style>
