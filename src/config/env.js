import dotenv from 'dotenv';
dotenv.config();
export const config = {
    db: {
        host: process.env.DB_HOST || '127.0.0.1',
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        name: process.env.DB_NAME || 'system',
        dialect: process.env.DB_DIALECT || 'mysql',
    }
}
//1. ماذا يفعل هذا الكود؟
// import dotenv و dotenv.config(): يقرأ ملف .env الموجود في المجلد الرئيسي للمشروع ويحمل المتغيرات داخل process.env.
//
// تصدير كائن config: يجمع بيانات قاعدة البيانات في مكان واحد ككائن (Object) بدلاً من كتابة process.env.DB_HOST في كل مكان في التطبيق.
//
// القيم الافتراضية (Fallback Values): يستعمل معامل || لحماية التطبيق؛ فإذا نسيت إضافة أي متغير في .env (مثل DB_PORT) سيستخدم القيمة الافتراضية تلقائياً (3306).
//
// تحويل الأنواع (Data Typing): يحول process.env.DB_PORT إلى رقم باستعمال Number(...) لأن متغيرات .env تُقرأ نصاً (string) دائماً.