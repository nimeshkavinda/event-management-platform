<template>

      
<form>
    
     
        <v-container>
              <v-spacer></v-spacer>
          
                <v-col cols="12" sm="6">
                    <v-text-field>
                        v-model="mail"
                        :error-messages="mailErrors"
                        label="Email address"
                        
                        solo
                        required
                    </v-text-field>

                </v-col>

                <v-col cols="12" sm="6">
                    <v-text-field >
                        v-model="Password"
                        lable="Password"
                        solo
                        required
                    </v-text-field>
                    
                    <v-text>Frogget Password</v-text>

                    <v-btn class="mr-4" @click="Sigin">
                        Sigin

                    </v-btn>

                </v-col>
         
        </v-container>
    
  </form>
  
</template>

<script>
export default {
    name:'LoginForm'
}
</script>