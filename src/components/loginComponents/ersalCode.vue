<template>
    <div class="di flex flex-col justify-center items-center mb-8">
      <v-otp-input
        ref="otpInput"
        v-model:value="bindModal"
        input-classes="otp-input"
        separator=""
        :num-inputs="5"
        :should-auto-focus="true"
        input-type="letter-numeric"
        :conditionalClass="['one', 'two', 'three', 'four']"
        :placeholder="['', '', '', '']"
        @on-change="handleOnChange"
        @on-complete="handleOnComplete"
      />
    </div>
    <button class="w-full loginBtn mb-4" @click="clearInput(),verifyCode('e')">تایید</button>
    <button @click="fillInput('2929'),sendAgain()" class="w-full bg-green-600 text-white rounded-xl shadow-inner py-3.5 px-20 buttonS2">ارسال مجدد کد</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VOtpInput from "vue3-otp-input";

const props = defineProps<{ displayNumber: number }>();
const emit = defineEmits<{
  (event: 'changeShowNumber', newValue: number): void;
  (event: 'smsCode', sms_token: string): void;
  (event: 'sendCodeAgain', sms_token: string): void;
  (event: 'verify', sms_token: string): void;
}>();

const goNext = () => {
  const newValue = props.displayNumber || 0; 
  emit('changeShowNumber', newValue + 1);
}
const goPrev =()=>{
  const newValue = props.displayNumber || 0; 
  emit('changeShowNumber', newValue - 1);
}
const sendAgain =(usless:any)=>{
  emit('sendCodeAgain',usless)
}

const bindModal = ref("");
const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null);

const handleOnComplete = (value: string) => {
  console.log("OTP completed: ", value);
  emit('smsCode', value);
};

const handleOnChange = (value: string) => {
  console.log("OTP changed: ", value);
};
const verifyCode = (usless:string)=>{
  emit('verify',usless);
}

const clearInput = () => {
  otpInput.value?.clearInput();
};

const fillInput = (value: string) => {
  console.log(value);
  otpInput.value?.fillInput(value);
};
</script>

<style scoped>
</style>

<style>
.di div {
  flex-direction: row-reverse;
}
.otp-input {
    margin: 0 10px;
    border-radius: 6px;
    border: 1px solid #E72F5E;
    text-align: center;
    box-shadow: 0 4px 5px -1px rgba(249, 152, 152, 0.10);
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 41px;
    height: 41px;
    padding: 9px 14px 9px 15px;
    align-items: center;
    font-family: IRANSans;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.otp-input.error {
    border: 1px solid red !important;
}

.vpd-input-group label{
    display: none;
}

.vpd-input-group input {
    text-align: right;
    font-family: IRANSans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: var(--text);
    display: flex;
    width: 100%;
    height: 44px;
    align-items: flex-start;
    border: var(--a) 1.5px solid !important;
    border-radius: 10px !important;
}
</style>