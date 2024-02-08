const { src, dest } = require("gulp");
const path = require("path");

const paths = {
    views: ['./src/views/**/*.*'] 
};

function copy(cb) {
    copy_views(cb);
}

function copy_views(cb) {
    src(paths.views)
        .pipe(dest('dist/views'));
        cb();
}

exports.copy = copy;