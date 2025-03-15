<template>
  <form @submit.stop.prevent="handleRegister" class="w-full h-screen flex items-center justify-center px-4">
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl">Register</CardTitle>
        <CardDescription>
          Enter your details to create an account
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <Alert variant="destructive" v-if="message">
          <AlertCircle class="w-4 h-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {{ message }}
          </AlertDescription>
        </Alert>
        <div class="grid gap-2">
          <Label for="name">Name</Label>
          <Input id="name" type="text" placeholder="Eg. Sabatino" required v-model="credentials.name" />
          <small class="text-red-500" v-if="hasError('name')">{{ getError('name') }}</small>
        </div>
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required v-model="credentials.email" />
          <small class="text-red-500" v-if="hasError('email')">{{ getError('email') }}</small>
        </div>
        <div class="grid gap-2">
          <Label for="password">Password</Label>
          <Input id="password" type="password" required v-model="credentials.password" />
          <small class="text-red-500" v-if="hasError('password')">{{ getError('password') }}</small>
        </div>
      </CardContent>
      <CardFooter>
        <Button class="w-full">Register</Button>
      </CardFooter>
    </Card>
  </form>
</template>
<script setup>
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {useUserStore} from "@/stores/User.js";
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert'
import {AlertCircle} from 'lucide-vue-next'
import {ref} from "vue";

const hasError = (field) => {
  return errors.value.hasOwnProperty(field);
}

const getError = (field) => {
  return errors.value[field].join(', ');
}

const userStore = useUserStore();

const credentials = ref({
  name: '',
  email: '',
  password: ''
});

const message = ref('');
const errors = ref({});

const handleRegister = async () => {
  const registerResponse = await userStore.register(
      credentials.value.name,
      credentials.value.email,
      credentials.value.password,
  );
  if (!registerResponse.success) {
    message.value = registerResponse.body.message;
    errors.value = Object.assign(errors.value, registerResponse.body.errors);
  } else {
    alert('ok!');
  }
}

</script>