
# from django.core.mail import send_mail
# from sendEmail.settings_utils import get_env_variable
# from django.conf import settings

# def send_email(subject, message, email):
#     try:
#         from_email = f'Amalitech<{get_env_variable("EMAIL_HOST_USER")}>'
#         # mail = EmailMessage(subject, message, from_email, [email])
#         # mail.content_subtype = "html"
#         # mail.send()
#         # return True
#         subject = 'Hello from Django'
#         message = 'This is a test email.'
#         # from_email = settings.DEFAULT_FROM_EMAIL
#         email = ['emmanuelnkubito2@gmail.com']

#         send_mail(subject, message, from_email, email)
#     except Exception:
#         return False

from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.response import Response

class EmailView(APIView):
    def post(self, request):
        subject = request.data.get('subject')
        message = request.data.get('message')
        recipient_list = request.data.get('recipient_list')
        from_email = 'your-email@example.com'

        send_mail(subject, message, from_email, recipient_list)

        return Response({'message': 'Email sent successfully'})