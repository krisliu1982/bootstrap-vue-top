<template>
    <div class="table-responsive">
        <table class="table md:table-stacked">
            <thead>
                <tr>
                    <th scope="col">Skill</th>
                    <th scope="col">Description</th>
                    <th scope="col">Guide</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in skillOrder">
                    <td>
                        <a href="#">{{ item }}</a>
                    </td>
                    <td>skill.description</td>
                    <td><a href="#">guide.label</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const skillOrder = [
    'bootstrap-v4-v6-migration',
    'bootstrap-v5-v6-migration',
    'bootstrap-v6-install',
    'bootstrap-npm',
    'bootstrap-webpack',
    'bootstrap-parcel',
    'bootstrap-vite',
    'bootstrap-component',
    'bootstrap-component-js',
    'bootstrap-color-system',
    'bootstrap-utility-api'
]

</script>