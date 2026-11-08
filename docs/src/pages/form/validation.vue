<template>
  <div class="docs-toc-nav">
    <nav v-docstoc id="docs-nav-validation">
      <a href="#validation-form">表单验证</a>
      <a href="#validation-field">表单项验证</a>
    </nav>
  </div>

  <div v-scrollspy.body data-bs-target="#docs-nav-validation" class="docs-content">
    <h1>Validation</h1>
    <p class="fs-4 fw-light">
      引入
      <a href="https://github.com/jquense/yup" target="_blank">Yup</a>
      对数据进行验证。了解更多请阅读
      <a href="https://getbootstrap.com/docs/5.3/forms/validation/" target="_blank">Bootstrap Form Validation</a>
    </p>

    <h2 id="validation-form">
      表单验证<a class="anchor-link" aria-label="Link to this section: 表单验证" href="#validation-form"> </a>
    </h2>
    <p>
      你可以使用 <code>.is-invalid</code> 来分别指示无效表单字段。请注意，<code>.invalid-feedback</code>
      用于验证信息反馈。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <form novalidate @submit.prevent="submitForm1">
          <div class="row mb-3">
            <label for="email1" class="col-sm-3 col-form-label"> Email <strong class="text-danger">*</strong> </label>
            <div class="col-sm-9">
              <input
                type="email"
                class="form-control"
                id="email1"
                v-model="data1.email"
                :class="{ 'is-invalid': errors1.email }"
                @change="validateField1('email')"
              />
              <div class="invalid-feedback">
                {{ errors1.email }}
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <label for="password1" class="col-sm-3 col-form-label">
              Password <strong class="text-danger">*</strong>
            </label>
            <div class="col-sm-9">
              <input
                type="password"
                class="form-control"
                id="password1"
                v-model="data1.password"
                :class="{ 'is-invalid': errors1.password }"
                @change="validateField1('password')"
              />
              <div class="invalid-feedback">
                {{ errors1.password }}
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label class="col-form-label"> Details <strong class="text-danger">*</strong> </label>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name <strong class="text-danger">*</strong></th>
                  <th scope="col">Number <strong class="text-danger">*</strong></th>
                  <th scope="col">Remark</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in data1.details">
                  <td>{{ index + 1 }}</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      v-model="item.name"
                      :class="{ 'is-invalid': errors1[`details[${index}].name`] }"
                      @change="validateField1(`details[${index}].name`)"
                    />
                    <div class="invalid-feedback">
                      {{ errors1[`details[${index}].name`] }}
                    </div>
                  </td>
                  <td>
                    <input
                      type="number"
                      class="form-control"
                      v-model="item.number"
                      :class="{
                        'is-invalid': errors1[`details[${index}].number`]
                      }"
                      @change="validateField1(`details[${index}].number`)"
                    />
                    <div class="invalid-feedback">
                      {{ errors1[`details[${index}].number`] }}
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" v-model="item.remark" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="invalid-feedback" :class="{ 'd-block': errors1.details }">
              {{ errors1.details }}
            </div>
          </div>
          <div class="row mb-3">
            <label for="select1" class="col-sm-3 col-form-label"> Select <strong class="text-danger">*</strong> </label>
            <div class="col-sm-9">
              <select
                class="form-select"
                id="select1"
                v-model="data1.select"
                :class="{ 'is-invalid': errors1.select }"
                @change="validateField1('select')"
              >
                <option value="">--</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </select>
              <div class="invalid-feedback">
                {{ errors1.select }}
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-form-label col-sm-3"> Radios <strong class="text-danger">*</strong> </label>
            <div class="col-sm-9">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="gridRadios1"
                  value="option1"
                  v-model="data1.radio"
                  @change="validateField1('radio')"
                />
                <label class="form-check-label" for="gridRadios1"> First radio </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="gridRadios2"
                  value="option2"
                  v-model="data1.radio"
                  @change="validateField1('radio')"
                />
                <label class="form-check-label" for="gridRadios2"> Second radio </label>
              </div>
              <div class="invalid-feedback" :class="{ 'd-block': errors1.radio }">
                {{ errors1.radio }}
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-form-label col-sm-3"> Checkboxs <strong class="text-danger">*</strong> </label>
            <div class="col-sm-9">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheckboxs1"
                  value="option1"
                  v-model="data1.checkboxs"
                  @change="validateField1('checkboxs')"
                />
                <label class="form-check-label" for="gridCheckboxs1"> First checkbox </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheckboxs2"
                  value="option2"
                  v-model="data1.checkboxs"
                  @change="validateField1('checkboxs')"
                />
                <label class="form-check-label" for="gridCheckboxs2"> Second checkbox </label>
              </div>
              <div class="invalid-feedback" :class="{ 'd-block': errors1.checkboxs }">
                {{ errors1.checkboxs }}
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-form-label col-sm-3">文件上传 <strong class="text-danger">*</strong></label>
            <div class="col-sm-9">
              <BvFileUploader :file-list="data1.files" @file-change="handleFileChange" @file-remove="handleFileRemove">
                <template #trigger>
                  <button type="button" class="btn btn-outline-primary">点击上传</button>
                </template>
                <template #tip>
                  <div class="form-text">jpg/jpeg files with a size less than 2MB.</div>
                </template>
              </BvFileUploader>
              <div class="invalid-feedback" :class="{ 'd-block': errors1.files }">
                {{ errors1.files }}
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-9 offset-sm-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="invalidCheck2"
                  v-model="data1.checkbox"
                  @change="validateField1('checkbox')"
                />
                <label class="form-check-label" for="invalidCheck2"> Agree to terms and conditions </label>
              </div>
              <div class="invalid-feedback" :class="{ 'd-block': errors1.checkbox }">
                {{ errors1.checkbox }}
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-9 offset-sm-3">
              <div class="hstack gap-3 flex-wrap">
                <button type="submit" class="btn btn-primary">Create</button>
                <button type="button" class="btn btn-secondary" @click="resetForm1">Reset</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <code-highlight type="vue" :code="formCode" label="vue" />
    </div>

    <h2 id="validation-field">
      表单项验证<a class="anchor-link" aria-label="Link to this section: 表单项验证" href="#validation-field"> </a>
    </h2>
    <p>
      为了解决
      <a href="https://github.com/twbs/bootstrap/issues/25110" target="_blank">边框圆角的问题</a
      >，输入组需要添加一个额外的 <code>.has-validation</code> 类。
    </p>
    <div class="docs-example">
      <div class="docs-example-data">
        <form novalidate @submit.prevent="submitForm2">
          <div class="row mb-3">
            <label for="mobile1" class="col-sm-3 col-form-label text-end"
              ><strong class="text-danger">*</strong><span class="ms-1">Mobile</span></label
            >
            <div class="col-sm-9">
              <input
                type="tel"
                class="form-control"
                id="mobile1"
                v-model="data2.mobile"
                :class="{ 'is-invalid': errors2.mobile }"
                @change="validateField2('mobile')"
              />
              <div class="invalid-feedback">
                {{ errors2.mobile }}
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <label for="verification1" class="col-sm-3 col-form-label text-end"
              ><strong class="text-danger">*</strong><span class="ms-1">Verification code</span></label
            >
            <div class="col-sm-9">
              <div class="input-group has-validation">
                <input
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors2.verification }"
                  id="verification1"
                  v-model="data2.verification"
                  @change="validateField2('verification')"
                />
                <button class="btn btn-outline-primary" type="button" @click="validateField2('mobile')">
                  Send Verification code
                </button>
                <div class="invalid-feedback">
                  {{ errors2.verification }}
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-9 offset-sm-3">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
      </div>
      <code-highlight type="vue" :code="fieldCode" label="vue" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import * as yup from 'yup';
import { get } from 'lodash-es';

const data1Create = () => {
  let d = {
    email: '',
    password: '',
    details: [],
    select: '',
    radio: '',
    checkboxs: [],
    checkbox: false,
    files: []
  };

  for (let i = 0; i < 3; i++) {
    d.details.push({
      name: '',
      number: null,
      remark: ''
    });
  }

  return d;
};
const data1 = ref(data1Create());

const detailSchema = yup.object({
  name: yup.string().required('Name必填'),
  number: yup.number().required('Number必填').min(1, 'Number最小为1').max(10, 'Number最大为10')
});

const schema1 = yup.object({
  email: yup.string().required('Email必填').email('Email格式不正确'),
  password: yup.string().required('Password必填'),
  details: yup.array().of(detailSchema).min(1, 'Details至少需要一个'),
  select: yup.string().required('Select必选'),
  radio: yup.string().required('Radio必选'),
  checkboxs: yup.array().min(1, 'Checkboxs必选'),
  checkbox: yup.boolean().oneOf([true], 'Checkbox必选'),
  files: yup.array().min(1, '文件必选')
});

const errors1 = ref({});
function submitForm1() {
  schema1
    .validate(data1.value, { abortEarly: false })
    .then(() => {
      // 验证通过，清除错误
      errors1.value = {};
    })
    .catch((err) => {
      const validationErrors = {};
      err.inner.forEach((error) => {
        if (!validationErrors[error.path]) {
          validationErrors[error.path] = error.message;
        }
      });
      errors1.value = validationErrors;
    });
}

function validateField1(fieldName) {
  const fieldSchema = yup.reach(schema1, fieldName);
  fieldSchema
    .validate(get(data1.value, fieldName), { abortEarly: true })
    .then(() => {
      // 验证通过，清除错误
      errors1.value[fieldName] = '';
    })
    .catch((err) => {
      errors1.value[fieldName] = err.message;
    });
}

function resetForm1() {
  data1.value = data1Create();
  errors1.value = {};
}

function handleFileChange(fileEl) {
  const file = fileEl.files[0];
  console.log(file.size, file.name, file.type);
  //这里处理验证，上传等逻辑
  data1.value.files.push({
    url: 'http://baidu.com', //文件地址
    name: file.name,
    size: file.size
  });

  fileEl.value = ''; //可选

  validateField1('files');
}

function handleFileRemove(index) {
  data1.value.files.splice(index, 1);

  validateField1('files');
}

const data2 = ref({
  mobile: '',
  verification: ''
});

let schema2 = yup.object({
  mobile: yup
    .string()
    .required('Mobile必填')
    .matches(/^1[3-9]\d{9}$/, '请输入正确的Mobile'),
  verification: yup.string().required('Verification必填')
});

const errors2 = ref({});
function submitForm2() {
  schema2
    .validate(data2.value, { abortEarly: false })
    .then(() => {
      // 验证通过，清除错误
      errors2.value = {};
    })
    .catch((err) => {
      const validationErrors = {};
      err.inner.forEach((error) => {
        if (!validationErrors[error.path]) {
          validationErrors[error.path] = error.message;
        }
      });
      errors2.value = validationErrors;
    });
}

function validateField2(fieldName) {
  const fieldSchema = yup.reach(schema2, fieldName);
  fieldSchema
    .validate(get(data2.value, fieldName), { abortEarly: true })
    .then(() => {
      // 验证通过，清除错误
      errors2.value[fieldName] = '';
    })
    .catch((err) => {
      errors2.value[fieldName] = err.message;
    });
}

const formCode = `
<template>
  <form novalidate @submit.prevent="submitForm1">
    <div class="row mb-3">
      <label for="email1" class="col-sm-3 col-form-label">
        Email <strong class="text-danger">*</strong>
      </label>
      <div class="col-sm-9">
        <input type="email" class="form-control" id="email1" v-model="data1.email"
          :class="{ 'is-invalid': errors1.email }" @change="validateField1('email')" />
        <div class="invalid-feedback">
          {{ errors1.email }}
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <label for="password1" class="col-sm-3 col-form-label">
        Password <strong class="text-danger">*</strong>
      </label>
      <div class="col-sm-9">
        <input type="password" class="form-control" id="password1" v-model="data1.password"
          :class="{ 'is-invalid': errors1.password }" @change="validateField1('password')" />
        <div class="invalid-feedback">
          {{ errors1.password }}
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label class="col-form-label">
        Details <strong class="text-danger">*</strong>
      </label>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name <strong class="text-danger">*</strong></th>
            <th scope="col">Number <strong class="text-danger">*</strong></th>
            <th scope="col">Remark</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data1.details">
            <td>{{ index + 1 }}</td>
            <td>
              <input type="text" class="form-control" v-model="item.name" :class="{
                'is-invalid': errors1[\`details[\${index}].name\`]
              }" @change="validateField1(\`details[\${index}].name\`)" />
              <div class="invalid-feedback">
                {{ errors1[\`details[\${index}].name\`] }}
              </div>
            </td>
            <td>
              <input type="number" class="form-control" v-model="item.number" :class="{
                'is-invalid': errors1[\`details[\${index}].number\`]
              }" @change="validateField1(\`details[\${index}].number\`)" />
              <div class="invalid-feedback">
                {{ errors1[\`details[\${index}].number\`] }}
              </div>
            </td>
            <td>
              <input type="text" class="form-control" v-model="item.remark" />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="invalid-feedback" :class="{ 'd-block': errors1.details }">
        {{ errors1.details }}
      </div>
    </div>
    <div class="row mb-3">
      <label for="select1" class="col-sm-3 col-form-label">
        Select <strong class="text-danger">*</strong>
      </label>
      <div class="col-sm-9">
        <select class="form-select" id="select1" 
          v-model="data1.select" 
          :class="{ 'is-invalid': errors1.select }"
          @change="validateField1('select')">
          <option value="">--</option>
          <option value="One">One</option>
          <option value="Two">Two</option>
          <option value="Three">Three</option>
        </select>
        <div class="invalid-feedback">
          {{ errors1.select }}
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-form-label col-sm-3">
        Radios <strong class="text-danger">*</strong>
      </label>
      <div class="col-sm-9">
        <div class="form-check">
          <input class="form-check-input" type="radio" id="gridRadios1" value="option1" 
            v-model="data1.radio"
            @change="validateField1('radio')" />
          <label class="form-check-label" for="gridRadios1"> First radio </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" id="gridRadios2" value="option2" 
            v-model="data1.radio"
            @change="validateField1('radio')" />
          <label class="form-check-label" for="gridRadios2"> Second radio </label>
        </div>
        <div class="invalid-feedback" :class="{ 'd-block': errors1.radio }">
          {{ errors1.radio }}
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-form-label col-sm-3">
        Checkboxs <strong class="text-danger">*</strong>
      </label>
      <div class="col-sm-9">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheckboxs1" value="option1" 
            v-model="data1.checkboxs"
            @change="validateField1('checkboxs')" />
          <label class="form-check-label" for="gridCheckboxs1"> First checkbox </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheckboxs2" value="option2" 
            v-model="data1.checkboxs"
            @change="validateField1('checkboxs')" />
          <label class="form-check-label" for="gridCheckboxs2"> Second checkbox </label>
        </div>
        <div class="invalid-feedback" :class="{ 'd-block': errors1.checkboxs }">
          {{ errors1.checkboxs }}
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-form-label col-sm-3">
        文件上传 <strong class="text-danger">*</strong>
      </label>
      <div class="col-sm-9">
        <BvFileUploader 
          :file-list="data1.files" 
          @file-change="handleFileChange" 
          @file-remove="handleFileRemove">
          <template #trigger>
            <button type="button" class="btn btn-outline-primary">点击上传</button>
          </template>
          <template #tip>
            <div class="form-text">jpg/jpeg files with a size less than 2MB.</div>
          </template>
        </BvFileUploader>
        <div class="invalid-feedback" :class="{ 'd-block': errors1.files }">
          {{ errors1.files }}
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-sm-9 offset-sm-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="invalidCheck2" 
            v-model="data1.checkbox"
            @change="validateField1('checkbox')" />
          <label class="form-check-label" for="invalidCheck2">
            Agree to terms and conditions
          </label>
        </div>
        <div class="invalid-feedback" :class="{ 'd-block': errors1.checkbox }">
          {{ errors1.checkbox }}
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-sm-9 offset-sm-3">
        <div class="hstack gap-3 flex-wrap">
          <button type="submit" class="btn btn-primary">Create</button>
          <button type="button" class="btn btn-secondary" @click="resetForm1">Reset</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import * as yup from 'yup';
import { get } from 'lodash-es'

const data1Create = () => {
  let d = {
    email: '',
    password: '',
    details: [],
    select: '',
    radio: '',
    checkboxs: [],
    checkbox: false,
    files: []
  }

  for (let i = 0; i < 3; i++) {
    d.details.push({
      name: '',
      number: null,
      remark: ''
    })
  }

  return d;
}
const data1 = ref(data1Create())

const detailSchema = yup.object({
  name: yup.string().required('Name必填'),
  number: yup.number().required('Number必填').min(1, 'Number最小为1').max(10, 'Number最大为10'),
});

const schema1 = yup.object({
  email: yup.string().required('Email必填').email('Email格式不正确'),
  password: yup.string().required('Password必填'),
  details: yup.array().of(detailSchema).min(1, 'Details至少需要一个'),
  select: yup.string().required('Select必选'),
  radio: yup.string().required('Radio必选'),
  checkboxs: yup.array().min(1, 'Checkboxs必选'),
  checkbox: yup.boolean().oneOf([true], 'Checkbox必选'),
  files: yup.array().min(1, '文件必选'),
});

const errors1 = ref({});
function submitForm1() {
  schema1.validate(data1.value, { abortEarly: false }).then(() => {
    // 验证通过，清除错误
    errors1.value = {};
  }).catch(err => {
    const validationErrors = {};
    err.inner.forEach(error => {
      if (!validationErrors[error.path]) {
        validationErrors[error.path] = error.message;
      }
    });
    errors1.value = validationErrors;
  });
}

function validateField1(fieldName) {
  const fieldSchema = yup.reach(schema1, fieldName);
  fieldSchema.validate(get(data1.value, fieldName), { abortEarly: true }).then(() => {
    // 验证通过，清除错误
    errors1.value[fieldName] = '';
  }).catch(err => {
    errors1.value[fieldName] = err.message;
  });
}

function resetForm1() {
  data1.value = data1Create();
  errors1.value = {};
}

function handleFileChange(fileEl) {
  const file = fileEl.files[0];
  console.log(file.size, file.name, file.type);
  //这里处理验证，上传等逻辑
  data1.value.files.push({
    url: 'http://baidu.com',//文件地址
    name: file.name,
    size: file.size
  })

  fileEl.value = '';//可选

  validateField1('files');
}

function handleFileRemove(index) {
  data1.value.files.splice(index, 1);

  validateField1('files');
}
<\/script>`;

const fieldCode = `
<template>
  <form novalidate @submit.prevent="submitForm2">
    <div class="row mb-3">
      <label for="mobile1" class="col-sm-3 col-form-label text-end"><strong class="text-danger">*</strong><span
          class="ms-1">Mobile</span></label>
      <div class="col-sm-9">
        <input type="tel" class="form-control" id="mobile1" v-model="data2.mobile"
          :class="{ 'is-invalid': errors2.mobile }" @change="validateField2('mobile')">
        <div class="invalid-feedback">
          {{ errors2.mobile }}
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <label for="verification1" class="col-sm-3 col-form-label text-end"><strong class="text-danger">*</strong><span
          class="ms-1">Verification code</span></label>
      <div class="col-sm-9">
        <div class="input-group has-validation">
          <input type="text" class="form-control" :class="{ 'is-invalid': errors2.verification }"
            id="verification1" v-model="data2.verification" @change="validateField2('verification')">
          <button class="btn btn-outline-primary" type="button" @click="validateField2('mobile')">Send
            Verification
            code</button>
          <div class="invalid-feedback">
            {{ errors2.verification }}
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-sm-9 offset-sm-3 hstack gap-3">
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import * as yup from 'yup';
import { get } from 'lodash-es'

const data2 = ref({
  mobile: '',
  verification: ''
})

let schema2 = yup.object({
  mobile: yup.string().required('Mobile必填').matches(/^1[3-9]\d{9}$/, '请输入正确的Mobile'),
  verification: yup.string().required('Verification必填')
});

const errors2 = ref({});
function submitForm2() {
  schema2.validate(data2.value, { abortEarly: false }).then(() => {
    // 验证通过，清除错误
    errors2.value = {};
  }).catch(err => {
    const validationErrors = {};
    err.inner.forEach(error => {
      if (!validationErrors[error.path]) {
        validationErrors[error.path] = error.message;
      }
    });
    errors2.value = validationErrors;
  });
}

function validateField2(fieldName) {
  const fieldSchema = yup.reach(schema2, fieldName);
  fieldSchema.validate(get(data2.value, fieldName), { abortEarly: true }).then(() => {
    // 验证通过，清除错误
    errors2.value[fieldName] = '';
  }).catch(err => {
    errors2.value[fieldName] = err.message;
  });
}
<\/script>`;
</script>
